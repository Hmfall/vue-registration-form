<template>
    <div
        class="select"
        ref="select"
    >
        <div
            class="select__inner"
            :class="{
                'select-target': dropdownVisible,
                pointer: !multiselect || !selectedOptionsValue.length,
                errors: errorMessages?.length,
            }"
            @click="handleDropdownVisible"
        >
            <div
                class="select__content"
                :class="{
                    'selected-accent':
                        !selectedOptionsValue ||
                        (multiselect && !selectedOptionsValue.length),
                }"
            >
                <div
                    v-if="multiselect && selectedOptionsValue.length"
                    class="multiselect"
                    @click.stop
                >
                    <div
                        class="multiselect__item"
                        v-for="option in value"
                        :key="option.value"
                    >
                        <div class="multiselect__text">
                            {{ option?.name }}
                        </div>
                        <div
                            class="multiselect__icon"
                            @click="toggleRemoveOption(option)"
                        >
                            <svg viewBox="0 0 50 50">
                                <path
                                    d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <span v-if="multiselect">
                        {{ !selectedOptionsValue.length && label }}
                    </span>
                    <span v-else>
                        {{ selectedOptionsValue ? selectedOptionsValue : label }}
                    </span>
                </div>
            </div>
            <div
                class="select__icon"
                :class="{ 'transformed-icon': dropdownVisible }"
            >
                <svg viewBox="0 0 512 512">
                    <path
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                </svg>
            </div>
        </div>
        <div class="select__errors">
            <div>
                {{ this?.errorMessages[0]?.$message }}
            </div>
        </div>
        <div
            v-show="dropdownVisible"
            class="dropdown"
        >
            <div class="dropdown__inner">
                <ul class="dropdown__list">
                    <li
                        v-for="(option, index) in mappedSelectedOptions"
                        :key="index"
                        class="dropdown__item"
                        @click="handleOptionSelect(option)"
                    >
                        {{ option?.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VSelect',
    props: {
        options: {
            type: Array,
            required: true,
        },
        label: String,
        value: [Object, Array, null],
        multiselect: Boolean,
        errorMessages: Array,
    },
    data() {
        return {
            dropdownVisible: false,
            selectedOption: null,
            selectedOptions: [],
        };
    },
    methods: {
        handleDropdownVisible() {
            if (!this.mappedSelectedOptions.length) return;
            this.dropdownVisible = true;
        },
        handleOptionSelect(option) {
            if (this.multiselect) {
                const options = [...this.value, option];
                this.selectedOptions = [...options];
                this.$emit('input', options);
            } else {
                this.selectedOption = option;
                this.dropdownVisible = false;
                this.$emit('input', option);
            }
        },
        toggleRemoveOption(option) {
            const options = this.value.reduce((acc, cur) => {
                if (cur.value !== option.value) {
                    acc.push(cur);
                }
                return acc;
            }, []);

            this.selectedOptions = options;
            this.$emit('input', options);
        },
        closeDropdown(element) {
            if (!this.$refs.select || !this.$refs.select.contains(element.target)) {
                this.dropdownVisible = false;
            }
        },
    },
    computed: {
        selectedOptionsValue() {
            return this.multiselect ? this.selectedOptions : this.selectedOption?.name;
        },
        mappedSelectedOptions() {
            if (!this.multiselect) return this.options;

            return this.options.reduce((acc, cur) => {
                if (!this.value.find((item) => item.value === cur.value)) {
                    acc.push(cur);
                }
                return acc;
            }, []);
        },
    },
    mounted() {
        window.addEventListener('click', this.closeDropdown);
    },
    beforeMount() {
        window.removeEventListener('click', this.closeDropdown);
    },
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.select {
    position: relative;
    &__inner {
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: $rounded-s;
        padding: 12px;
        border: 1px solid var(--outline);
        transition: border 0.15s ease;
        &:hover {
            border: 1px solid var(--on-outline);
        }
    }
    &__content {
        user-select: none;
    }
    &__icon {
        width: 12px;
        display: flex;
        align-items: center;
        margin-left: 8px;
        transition: transform 0.15s ease;
    }
    &__errors {
        position: absolute;
        bottom: 0;
        left: 0;
        min-height: 14px;
        font-size: $font-s;
        padding: 0 2px;
        color: var(--error);
        transform: translateY(16px);
        transition: all 0.2s ease;
    }
}

.dropdown {
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 5px;
    z-index: 10;
    overflow: hidden;
    background: var(--surface-container);
    border-radius: $rounded-s;
    box-shadow: $box-shadow-m;
    &__inner {
        user-select: none;
        max-height: 350px;
        overflow-y: auto;
    }
    &__item {
        cursor: pointer;
        padding: 10px;
        color: var(--on-surface);
        transition: all 0.15s ease;
        &:hover {
            color: var(--on-primary);
            background-color: var(--primary);
        }
    }
}

.multiselect {
    display: flex;
    &__item {
        display: flex;
        align-items: center;
        border-radius: $rounded-s;
        overflow: hidden;
        background-color: var(--surface-container-lowest);
        &:not(:last-child) {
            margin-right: 8px;
        }
    }
    &__text {
        font-size: $font-s;
        padding: 2px 0px 2px 6px;
        margin-right: 2px;
    }
    &__icon {
        width: 16px;
        height: 100%;
        padding: 0 4px 0px 4px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.15s ease;
        &:hover {
            background-color: var(--error-container);
        }
    }
}

.selected-accent {
    opacity: 0.5;
}

.transformed-icon {
    transform: rotate(180deg);
}

.select-target {
    border: 1px solid var(--on-outline);
}

.errors {
    border: 1px solid var(--error);
    &:hover {
        border: 1px solid var(--error);
    }
    &:focus {
        border: 1px solid var(--error);
    }
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--on-surface);
    border-radius: 12px;
}
</style>
