<script setup>
    import {ref, onMounted} from 'vue';
    import { useI18n } from 'vue-i18n';
    import {setContact} from '../firebase'

    const { t } = useI18n(); 

    const errorMessage = ref('')

    const name = ref('');
    const email = ref('');
    const phone = ref('');
    const topic = ref('');
    const message = ref('');

    const nameRef = ref(null);
    const emailRef = ref(null);
    const phoneRef = ref(null);
    const topicRef = ref(null);
    const messageRef = ref(null);

    function validateForm() {
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        const phoneRegex = new RegExp(/^\d{9,15}$/);
        let valid = true;

        const fields = new Map();
        fields.set("name", [nameRef.value, true]);
        fields.set("email", [emailRef.value, true]);
        fields.set("phone", [phoneRef.value, true]);
        fields.set("topic", [topicRef.value, true]);
        fields.set("message", [messageRef.value, true]);

        // validation name
        if (!name.value.trim()) {
            fields.get('name')[0].style.border = '1px solid var(--sh-pink)'
            fields.get('name')[1] = false;
        }

        // validation email
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            fields.get('email')[0].style.border = '1px solid var(--sh-pink)'
            fields.get('email')[1] = false;
        }

        // validation phone
        if (!phone.value.trim() || !phoneRegex.test(phone.value)) {
            fields.get('phone')[0].style.border = '1px solid var(--sh-pink)'
            fields.get('phone')[1] = false;
        }

        // validation message
        if (!message.value.trim()) {
            fields.get('message')[0].style.border = '1px solid var(--sh-pink)'
            fields.get('message')[1] = false;
        }

        // validation topic
        if (!topic.value.trim()) {
            fields.get('topic')[0].style.border = '1px solid var(--sh-pink)'
            fields.get('topic')[1] = false;
        }

        // reseting the proper fields borders
        for (const [key, value] of fields) {
            if (value[1] === false) {
                errorMessage.value = t('contactError');
                valid = false;
                continue;
            }

            value[0].style.border = 'none';
        }

        if (valid) {
            errorMessage.value = t('contactDone');
        }

        return valid;
    }

    async function addNewContact() {
        if (validateForm()) {
            await setContact(name.value, email.value, phone.value, topic.value, message.value);
            name.value = '', email.value = '', phone.value = '', topic.value = '', message.value = ''
        }
    }

    onMounted(() => {

    });
</script>

<template>
    <div class="contact-form-container">
        <div class="header-cont">
            <h1>{{ $t('contactHeader') }}</h1>

            <div class="message">
                <h2 v-html="errorMessage"></h2>
            </div>
        </div>

        <div class="form-content">
            <form  @submit.prevent="addNewContact">
                <input ref="nameRef" v-model="name" :placeholder="$t('contactName')" type="text">
                <input ref="emailRef" v-model="email" :placeholder="$t('contactEmail')" type="email">
                <input ref="phoneRef" v-model="phone" :placeholder="$t('contactPhone')" type="tel">
                <input ref="topicRef" v-model="topic" :placeholder="$t('contactTopic')" type="text">
                <input ref="messageRef" v-model="message" :placeholder="$t('contactMessage')" type="text">

                <button type="submit" class="send-container">
                    <div class="send">{{$t('contactSend')}}</div>
                    <div class="go">
                        <p v-html="$t('contactSendMessage')"></p>
                    </div>
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .contact-form-container {
        width: 100vw;
        height: auto;
        background: var(--sh-other-black);
        padding: 10vw 0 0 20vw;

        @media screen and (max-width: 768px) {
            padding: 20vw 0 0 10vw;
        }

        .header-cont {
            width: 55vw;
            padding-bottom: 2vw;
            border-bottom: 0.1vw solid var(--sh-blackish);

            @media screen and (max-width: 768px) {
                width: 75vw;
                padding-bottom: 4vw;
            }

            h1 {
                color: var(--sh-white);
                font-size: 3vw;

                @media screen and (max-width: 768px) {
                    font-size: 6vw;
                }
            }

            .message {
                width: auto;

                h2 {
                    font-size: 2vw;
                    color: var(--sh-pink);

                    @media screen and (max-width: 768px) {
                        font-size: 4vw;
                    }
                }
            }
        }

        .form-content {
            width: 55vw;
            height: auto;
            padding: 2vw 0 0 0;

            @media screen and (max-width: 768px) {
                width: 75vw;
            }

            form {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                gap: 1vw;
                flex-flow: row wrap;

                input {
                    width: 20vw;
                    height: auto;
                    padding: 4vw 2vw 1vw 1vw;
                    background: var(--sh-blackish);
                    border: none;
                    font-size: 1.5vw;
                    color: var(--sh-white);

                    @media screen and (max-width: 768px) {
                        width: 35vw;
                        padding: 7vw 4vw 3vw 3vw;
                        font-size: 2.5vw;
                    }

                    &:nth-of-type(5) {
                        width: 41vw;

                        @media screen and (max-width: 768px) {
                            width: 71vw;
                        }
                    }
                }

                .send-container {
                    width: 30vw;
                    height: 10vw;
                    border: none;
                    border-radius: 10vw;
                    background: var(--sh-blue);
                    display: grid;
                    align-items: center;
                    justify-items: center;
                    cursor: pointer;
                    position: relative;
                    transform: translate(0vw, 5vw);
                    overflow: hidden;

                    @media screen and (max-width: 768px) {
                        transform: translate(0, 6vw);
                    }

                    .send {
                        font-size: 1.4vw;
                        color: var(--sh-white);
                        position: relative;
                        transition: all .6s cubic-bezier(.23,1,.32,1);

                        @media screen and (max-width: 768px)  {
                            font-size: 2.4vw;
                        }
                    }

                    .go {
                        width: 100%;
                        height: 200%;
                        background: var(--sh-white);
                        border-radius: 50vw;
                        display: grid;
                        justify-items: center;
                        align-items: center;
                        color: var(--sh-blue);
                        font-weight: bold;
                        font-size: 1vw;
                        position: absolute;
                        transform: translate(0, 31vw);
                        transition: all .4s cubic-bezier(.23,1,.32,1);

                        @media screen and (max-width: 768px) {
                            font-size: 2.5vw;
                        }
                    }

                    &:hover {
                        .send {
                            transform: translate(0vw, -1vw);
                            opacity: 0;
                        }

                        .go {
                            width: 100%;
                            height: 100%;
                            border-radius: 10vw;
                            transform: translate(0, 0);
                        }
                    }
                }
            }
        }
    }
</style>