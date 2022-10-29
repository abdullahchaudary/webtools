<script>
export default {
    data () {
        return {
            showEncStr: false,
            showDecStr: false,
            textString: 'hello world!',
            encString: '',
            decString: '',
            copyText: 'Copy',
            copyText2: 'Copy',
            passStr: 'passphrase',
            passStrDecrypt: '',
            textStringDecrypt: ''
        }
    },
    methods: {
        encryptRC4(){
            if (this.textString !== '' && this.passStr !== ''){
                this.encString = this.CryptoJS.RC4.encrypt(this.textString, this.passStr);
                this.showEncStr = true;
            } else {
                this.showEncStr = false;
            }
        },
        decryptRC4(){
            if (this.textStringDecrypt !== '' && this.passStrDecrypt !== ''){
                let encData = this.CryptoJS.RC4.decrypt(this.textStringDecrypt, this.passStrDecrypt);
                this.decString = encData.toString(this.CryptoJS.enc.Utf8);
                this.showDecStr = true;
            } else {
                this.showDecStr = false;
            }
        },
        copyToClipboard(){
            navigator.clipboard.writeText(this.encString);
            this.copyText = 'Copied!';
            setTimeout(()=>{
                this.copyText = 'Copy';
            },2000);
        },
        copyToClipboard2(){
            navigator.clipboard.writeText(this.decString);
            this.copyText2 = 'Copied!';
            setTimeout(()=>{
                this.copyText2 = 'Copy';
            },2000);
        },
        changeAESMode(e){
            this.aesMode = e.target.value;
            console.log(this.aesMode);
        },
        changeAESPadding(e){
            this.aesPadding = e.target.value;
            console.log(this.aesPadding);
        }
    }
}
</script>

<template>
    <p class="text-2xl mb-3">RC4 Encryption</p>
    <input
        v-model="passStr"
        type="text"
        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded-lg transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Passphrase"
    />
    <textarea
        v-model="textString"
        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded-lg transition ease-in-out mb-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        rows="4"
        placeholder="Enter text"
    ></textarea>
    <div class="flex gap-3">
        <button type="button" @click="encryptRC4" class="inline-block mb-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Encrypt</button>
    </div>
    <p v-show="showEncStr" class="mb-2 text-black dark:text-white text-lg">RC4 encrypted string:</p>
    <div v-show="showEncStr" class="rounded-lg p-2 w-full bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white">
        <div class="text-sm mb-1 flex justify-end"><p @click="copyToClipboard" class="cursor-pointer">{{this.copyText}}</p></div>
        <div class="w-full mb-1 break-all">
            {{this.encString}}
        </div>
    </div>
    
    <p class="text-2xl mt-9 mb-3">RC4 Decryption</p>
    <input
        v-model="passStrDecrypt"
        type="text"
        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded-lg transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Passphrase"
    />
    <textarea
        v-model="textStringDecrypt"
        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded-lg transition ease-in-out mb-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        rows="4"
        placeholder="Enter text"
    ></textarea>
    <div class="flex gap-3">
        <button type="button" @click="decryptRC4" class="inline-block mb-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Decrypt</button>
    </div>
    <p v-show="showDecStr" class="mb-2 text-black dark:text-white text-lg">RC4 decrypted string:</p>
    <div v-show="showDecStr" class="rounded-lg p-2 w-full bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white">
        <div class="text-sm mb-1 flex justify-end"><p @click="copyToClipboard2" class="cursor-pointer">{{this.copyText2}}</p></div>
        <div class="w-full mb-1 break-all">
            {{this.decString}}
        </div>
    </div>
</template>