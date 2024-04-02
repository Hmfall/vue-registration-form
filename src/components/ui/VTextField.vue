<template>
    <div class="input">
        <div class="input__inner">
            <div
                class="input__control"
                :class="{
                    error: this?.errorMessages[0]?.$message,
                    'disable-select': this.mask === 'date',
                }"
            >
                <div
                    v-if="$slots['prepend']"
                    class="input__prepend disable-select"
                >
                    <slot name="prepend" />
                </div>
                <input
                    :type="type"
                    class="input__field"
                    :name="name"
                    :value="value"
                    :placeholder="name"
                    @input="
                        updateValue(($event.target.value = withMask($event.target.value)))
                    "
                />
            </div>
            <div class="input__details">
                {{ this?.errorMessages[0]?.$message }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VTextField',
    props: {
        value: [String, Number],
        name: String,
        errorMessages: [Array],
        type: {
            type: String,
            default: 'text',
        },
        mask: String,
        maxLength: Number,
    },
    methods: {
        updateValue(value) {
            if (this.type === 'number') {
                if (!value) {
                    value = null;
                } else {
                    value = parseInt(value);
                }
            }
            this.$emit('input', value);
        },
        withMask(value) {
            switch (this.mask) {
                case 'phone':
                    return this.phoneMask(value);
                case 'date':
                    return this.dateMask(value);
                default:
                    if (this.maxLength) {
                        return this.defaultLengthMask(value, this.maxLength);
                    }
                    return value;
            }
        },
        dateMask(value) {
            return value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d{1,3})/, '$1.$2')
                .replace(/(\d{2})(\d{1,3})/, '$1.$2')
                .replace(/(-\d{4})\d+?$/, '$1')
                .slice(0, 10);
        },
        phoneMask(value) {
            return value
                .replace(/\D/g, '')
                .replace(/(\d{1})(\d{1})/, '$1 ($2')
                .replace(/(\d{3})(\d{1,3})/, '$1) $2')
                .replace(/(\d{3})(\d{1,4})/, '$1-$2')
                .replace(/(-\d{4})\d+?$/, '$1');
        },
        defaultLengthMask(value, length) {
            return value.slice(0, length);
        },
    },
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.input {
    position: relative;
    &__inner {
        display: flex;
        flex-direction: column;
    }
    &__control {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        border: 1px solid var(--outline);
        border-radius: $rounded-s;
        transition: border 0.15s ease;
        &:hover {
            border: 1px solid var(--on-outline);
        }
        &:focus {
            border: 1px solid var(--on-outline);
        }
    }
    &__field {
        width: 100%;
        border-radius: $rounded-s;
        padding: 12px 8px 12px 12px;
    }
    &__details {
        position: absolute;
        bottom: 0;
        left: 0;
        min-height: 14px;
        font-size: $font-s;
        padding: 0 2px;
        color: var(--error);
        transform: translateY(16px);
        transition: all 0.2s ease;
        white-space: nowrap;
    }
    &__prepend {
        padding-left: 12px;
    }
}

input {
    text-decoration: none;
}

.error {
    border: 1px solid var(--error);
    &:hover {
        border: 1px solid var(--error);
    }
    &:focus {
        border: 1px solid var(--error);
    }
}

.transform-normal {
    transform: translateY(0);
}

::placeholder {
    color: var(--on-surface-variant);
    opacity: 0.9;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type='number'] {
    -moz-appearance: textfield;
}
</style>
