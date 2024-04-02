<template>
    <div class="register-form">
        <div class="inner">
            <div class="title">
                <h2>Регистрация пользователя</h2>
            </div>
            <form @submit.prevent="submitHandler">
                <div class="groups">
                    <div class="group">
                        <div class="subgroup subgroup-main">
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Фамилия *</p>
                                <v-text-field
                                    class="subgroup-item__field"
                                    name="Фамилия"
                                    :error-messages="v$.form.lastName.$errors"
                                    v-model="v$.form.lastName.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Имя *</p>
                                <v-text-field
                                    class="subgroup-item__field"
                                    name="Имя"
                                    :error-messages="v$.form.firstName.$errors"
                                    v-model="v$.form.firstName.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Отчество</p>
                                <v-text-field
                                    class="subgroup-item__field"
                                    name="Отчество"
                                    :error-messages="v$.form.surName.$errors"
                                    v-model="v$.form.surName.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Пол</p>
                                <v-select
                                    :options="gendersList"
                                    label="Пол"
                                    :error-messages="v$.form.gender.$errors"
                                    v-model="v$.form.gender.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Дата рождения *</p>
                                <v-text-field
                                    class="subgroup-item__field"
                                    mask="date"
                                    name="Дата рождения"
                                    :error-messages="v$.form.born.$errors"
                                    v-model="v$.form.born.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Номер телефона *</p>
                                <v-text-field
                                    class="subgroup-item__field"
                                    mask="phone"
                                    name="Номер телефона"
                                    :error-messages="v$.form.phone.$errors"
                                    v-model="v$.form.phone.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Группа клиентов *</p>
                                <v-select
                                    :options="clientGroupsList"
                                    multiselect
                                    label="Группа клиентов"
                                    :error-messages="v$.form.clientGroups.$errors"
                                    v-model="v$.form.clientGroups.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Лечащий врач</p>
                                <v-select
                                    :options="attendingDoctorsList"
                                    label="Лечащий врач"
                                    :error-messages="v$.form.attendingDoctor.$errors"
                                    v-model="v$.form.attendingDoctor.$model"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <h3 class="group-title">Адрес</h3>
                        <div class="subgroup subgroup-address">
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Индекс</p>
                                <v-text-field
                                    type="number"
                                    name="Индекс"
                                    class="subgroup-item__field"
                                    :max-length="6"
                                    :error-messages="v$.form.contact.postalCode.$errors"
                                    v-model="v$.form.contact.postalCode.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Страна</p>
                                <v-text-field
                                    class="subgroup-item__field"
                                    name="Страна"
                                    :error-messages="v$.form.contact.country.$errors"
                                    v-model="v$.form.contact.country.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Область</p>
                                <v-text-field
                                    class="subgroup-item__field"
                                    name="Область"
                                    :error-messages="v$.form.contact.region.$errors"
                                    v-model="v$.form.contact.region.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Город *</p>
                                <v-text-field
                                    class="subgroup-item__field"
                                    name="Город"
                                    :error-messages="v$.form.contact.city.$errors"
                                    v-model="v$.form.contact.city.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Улица</p>
                                <v-text-field
                                    class="subgroup-item__field"
                                    name="Улица"
                                    :error-messages="v$.form.contact.street.$errors"
                                    v-model="v$.form.contact.street.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Дом</p>
                                <v-text-field
                                    class="subgroup-item__field"
                                    name="Дом"
                                    :error-messages="v$.form.contact.apartment.$errors"
                                    v-model="v$.form.contact.apartment.$model"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="group">
                        <h3 class="group-title">Паспорт</h3>
                        <div class="subgroup subgroup-data">
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Тип *</p>
                                <v-select
                                    :options="documentTypeList"
                                    label="Тип"
                                    :error-messages="v$.form.data.documentType.$errors"
                                    v-model="v$.form.data.documentType.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Серия</p>
                                <v-text-field
                                    type="number"
                                    class="row-col-subgroup__field"
                                    name="Серия"
                                    :max-length="4"
                                    :error-messages="v$.form.data.series.$errors"
                                    v-model="v$.form.data.series.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Номер</p>
                                <v-text-field
                                    type="number"
                                    class="row-col-subgroup__field"
                                    name="Номер"
                                    :max-length="6"
                                    :error-messages="v$.form.data.number.$errors"
                                    v-model="v$.form.data.number.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Дата выдачи *</p>
                                <v-text-field
                                    mask="date"
                                    class="row-col-subgroup__field"
                                    name="Дата выдачи"
                                    :error-messages="v$.form.data.issuedDate.$errors"
                                    v-model="v$.form.data.issuedDate.$model"
                                />
                            </div>
                            <div class="subgroup-item">
                                <p class="subgroup-item__title">Кем выдан</p>
                                <v-text-field
                                    class="row-col-subgroup__field"
                                    name="Кем выдан"
                                    :error-messages="v$.form.data.issued.$errors"
                                    v-model="v$.form.data.issued.$model"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="mark">
                        <div>* Поле обязательное для заполнения</div>
                    </div>
                    <popup
                        v-model="popup"
                        class="form-popup"
                    >
                        <div class="form-popup__content">Успешная регистрация</div>
                    </popup>
                    <v-button type="submit">Зарегистрироваться</v-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { helpers, minLength, required } from '@vuelidate/validators';
import { alphaValidator, dateValidator, phoneCodeValidator } from '@/utils/validators';
import { attendingDoctors, clientGroups, documentType, genders } from '@/consts';
import VTextField from '@/components/ui/VTextField.vue';
import VSelect from '@/components/ui/VSelect.vue';
import Popup from '@/components/ui/VPopup.vue';
import VButton from '@/components/ui/VButton.vue';

export default {
    name: 'RegisterForm',
    components: { Popup, VButton, VSelect, VTextField },
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            popup: false,
            form: {
                firstName: '',
                lastName: '',
                surName: '',
                born: '',
                phone: '',
                gender: null,
                clientGroups: [],
                attendingDoctor: null,
                contact: {
                    postalCode: null,
                    country: '',
                    region: '',
                    city: '',
                    street: '',
                    apartment: null,
                },
                data: {
                    documentType: null,
                    series: null,
                    number: null,
                    issued: '',
                    issuedDate: '',
                },
            },
        };
    },
    validations() {
        return {
            form: {
                firstName: {
                    required: this.required,
                    alphaValidator: this.alphaValidator,
                },
                lastName: {
                    required: this.required,
                    alphaValidator: this.alphaValidator,
                },
                surName: {
                    alphaValidator: this.alphaValidator,
                },
                born: {
                    required: this.required,
                    dateValidator: this.dateValidator,
                },
                phone: {
                    required: this.required,
                    phoneCodeValidator: this.phoneCodeValidator,
                    minLength: helpers.withMessage(
                        ({ $params }) =>
                            `Номер включает в себя ${$params.min - 5} символа`,
                        minLength(16),
                    ),
                },
                gender: {},
                clientGroups: {
                    required: this.required,
                },
                attendingDoctor: {},
                contact: {
                    postalCode: {
                        minLength: helpers.withMessage(
                            ({ $params }) =>
                                `Индекс включает в себя ${$params.min} символов`,
                            minLength(6),
                        ),
                    },
                    country: {
                        alphaValidator: this.alphaValidator,
                    },
                    region: {
                        alphaValidator: this.alphaValidator,
                    },
                    city: {
                        required: this.required,
                        alphaValidator: this.alphaValidator,
                    },
                    street: {},
                    apartment: {},
                },
                data: {
                    documentType: {
                        required: this.required,
                    },
                    series: {
                        minLength: helpers.withMessage(
                            ({ $params }) =>
                                `Серия включает в себя ${$params.min} символа`,
                            minLength(4),
                        ),
                    },
                    number: {
                        minLength: helpers.withMessage(
                            ({ $params }) =>
                                `Номер включает в себя ${$params.min} символов`,
                            minLength(6),
                        ),
                    },
                    issued: {},
                    issuedDate: {
                        required: this.required,
                        dateValidator: this.dateValidator,
                    },
                },
            },
        };
    },
    computed: {
        required() {
            return helpers.withMessage(() => `Обязательно для заполнения`, required);
        },
        alphaValidator() {
            return helpers.withMessage(() => `Некорректные символы`, alphaValidator);
        },
        dateValidator() {
            return helpers.withMessage(() => `Неверный формат даты`, dateValidator);
        },
        phoneCodeValidator() {
            return helpers.withMessage(() => `Номер начинается с 7`, phoneCodeValidator);
        },
        gendersList() {
            return genders;
        },
        attendingDoctorsList() {
            return attendingDoctors;
        },
        clientGroupsList() {
            return clientGroups;
        },
        documentTypeList() {
            return documentType;
        },
    },
    methods: {
        async submitHandler() {
            const result = await this.v$.$validate();
            if (!result) {
                return;
            }
            this.popup = true;
        },
    },
};
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.register-form {
    max-width: 920px;
    margin: 40px auto;
    border-radius: $rounded-m;
    box-shadow: $box-shadow-l;
    background-color: var(--surface-container);
}

.inner {
    width: 100%;
    padding: 25px;
}

.title {
    margin-bottom: 40px;
    text-align: center;
}

.groups {
    display: flex;
    flex-direction: column;
    gap: 36px;
    margin-bottom: 40px;
}

.group {
    display: flex;
    flex-direction: column;
    &-title {
        margin-bottom: 16px;
    }
}

.bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: $sm) {
        flex-direction: column;
        gap: 20px;
    }
}

.mark {
    font-style: italic;
    user-select: none;
    color: var(--on-surface-variant);
    font-size: $font-s;
}

.subgroup {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
    @media (min-width: $sm) {
        gap: 22px;
        grid-template: auto / repeat(2, 1fr);
    }
    @media (min-width: $md) {
        gap: 26px;
        grid-template: auto / repeat(3, 1fr);
    }
    &-main {
        @media (min-width: $md) {
            :nth-last-child(2) {
                grid-column: 1 / 3;
            }
            :last-child {
                grid-column: 3 / 4;
            }
        }
    }
    &-data {
        @media (min-width: $sm) {
            :last-child {
                grid-column: 1 / 3;
            }
        }
        @media (min-width: $md) {
            :nth-last-child(2) {
                grid-column: 1 / 2;
            }
            :last-child {
                grid-column: 2 / 4;
            }
        }
    }
    &-item {
        &__title {
            margin-bottom: 8px;
            padding-left: 2px;
        }
    }
}

.form-popup {
    &__content {
        text-align: center;
        user-select: none;
    }
}
</style>
