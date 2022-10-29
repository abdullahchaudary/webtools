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
            aesMode: 'CBC',
            aesPadding: 'Pkcs7',
            passStrDecrypt: '',
            textStringDecrypt: ''
        }
    },
    methods: {
        encryptAES(){
            var aesMode = null;
            var aesPadding = null;
            switch(this.aesMode){
                case 'CBC':
                    aesMode = this.CryptoJS.mode.CBC;
                    break;
                case 'CFB':
                    aesMode = this.CryptoJS.mode.CFB;
                    break;
                case 'CTR':
                    aesMode = this.CryptoJS.mode.CTR;
                    break;
                case 'OFB':
                    aesMode = this.CryptoJS.mode.OFB;
                    break;
                case 'ECB':
                    aesMode = this.CryptoJS.mode.ECB;
                    break;
                default:
                    aesMode = this.CryptoJS.mode.CBC;
            }
            switch(this.aesPadding){
                case 'Pkcs7':
                    aesPadding = this.CryptoJS.pad.Pkcs7;
                    break;
                case 'Iso97971':
                    aesPadding = this.CryptoJS.pad.Iso97971;
                    break;
                case 'AnsiX923':
                    aesPadding = this.CryptoJS.pad.AnsiX923;
                    break;
                case 'Iso10126':
                    aesPadding = this.CryptoJS.pad.Iso10126;
                    break;
                case 'ZeroPadding':
                    aesPadding = this.CryptoJS.pad.ZeroPadding;
                    break;
                case 'NoPadding':
                    aesPadding = this.CryptoJS.pad.NoPadding;
                    break;
                default:
                    aesPadding = this.CryptoJS.pad.Pkcs7;
            }

            if (this.textString !== '' && this.passStr !== ''){
                this.encString = this.CryptoJS.AES.encrypt(this.textString, this.passStr, {
                    mode: aesMode,
                    padding: aesPadding
                });
                this.showEncStr = true;
            } else {
                this.showEncStr = false;
            }
        },
        decryptAES(){
            var aesMode = null;
            var aesPadding = null;
            switch(this.aesMode){
                case 'CBC':
                    aesMode = this.CryptoJS.mode.CBC;
                    break;
                case 'CFB':
                    aesMode = this.CryptoJS.mode.CFB;
                    break;
                case 'CTR':
                    aesMode = this.CryptoJS.mode.CTR;
                    break;
                case 'OFB':
                    aesMode = this.CryptoJS.mode.OFB;
                    break;
                case 'ECB':
                    aesMode = this.CryptoJS.mode.ECB;
                    break;
                default:
                    aesMode = this.CryptoJS.mode.CBC;
            }
            switch(this.aesPadding){
                case 'Pkcs7':
                    aesPadding = this.CryptoJS.pad.Pkcs7;
                    break;
                case 'Iso97971':
                    aesPadding = this.CryptoJS.pad.Iso97971;
                    break;
                case 'AnsiX923':
                    aesPadding = this.CryptoJS.pad.AnsiX923;
                    break;
                case 'Iso10126':
                    aesPadding = this.CryptoJS.pad.Iso10126;
                    break;
                case 'ZeroPadding':
                    aesPadding = this.CryptoJS.pad.ZeroPadding;
                    break;
                case 'NoPadding':
                    aesPadding = this.CryptoJS.pad.NoPadding;
                    break;
                default:
                    aesPadding = this.CryptoJS.pad.Pkcs7;
            }
            if (this.textStringDecrypt !== '' && this.passStrDecrypt !== ''){
                this.decString = this.CryptoJS.AES.decrypt(this.textStringDecrypt, this.passStrDecrypt, {
                    mode: aesMode,
                    padding: aesPadding
                }).toString(this.CryptoJS.enc.Utf8);
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
    <p class="text-2xl mb-3">AES Encryption</p>
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
        <select @change="changeAESMode" class="mb-3 form-select appearance-none
          block
          px-1
          py-0
          font-medium
          text-sm
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="AES Mode">
            <option selected value="CBC">CBC</option>
            <option value="CFB">CFB</option>
            <option value="CTR">CTR</option>
            <option value="OFB">OFB</option>
            <option value="ECB">ECB</option>
        </select>
        <select @change="changeAESPadding" class="mb-3 form-select appearance-none
          block
          px-1
          py-0
          font-medium
          text-sm
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Padding Scheme">
            <option selected value="Pkcs7">Pkcs7</option>
            <option value="Iso97971">Iso97971</option>
            <option value="AnsiX923">AnsiX923</option>
            <option value="Iso10126">Iso10126</option>
            <option value="ZeroPadding">ZeroPadding</option>
            <option value="NoPadding">NoPadding</option>
        </select>
        <button type="button" @click="encryptAES" class="inline-block mb-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Encrypt</button>
    </div>
    <p v-show="showEncStr" class="mb-2 text-black dark:text-white text-lg">AES encrypted string:</p>
    <div v-show="showEncStr" class="rounded-lg p-2 w-full bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white">
        <div class="text-sm mb-1 flex justify-end"><p @click="copyToClipboard" class="cursor-pointer">{{this.copyText}}</p></div>
        <div class="w-full mb-1 break-all">
            {{this.encString}}
        </div>
    </div>
    
    <p class="text-2xl mt-9 mb-3">AES Decryption</p>
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
        <select @change="changeAESMode" class="mb-3 form-select appearance-none
          block
          px-1
          py-0
          font-medium
          text-sm
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="AES Mode">
            <option selected value="CBC">CBC</option>
            <option value="CFB">CFB</option>
            <option value="CTR">CTR</option>
            <option value="OFB">OFB</option>
            <option value="ECB">ECB</option>
        </select>
        <select @change="changeAESPadding" class="mb-3 form-select appearance-none
          block
          px-1
          py-0
          font-medium
          text-sm
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Padding Scheme">
            <option selected value="Pkcs7">Pkcs7</option>
            <option value="Iso97971">Iso97971</option>
            <option value="AnsiX923">AnsiX923</option>
            <option value="Iso10126">Iso10126</option>
            <option value="ZeroPadding">ZeroPadding</option>
            <option value="NoPadding">NoPadding</option>
        </select>
        <button type="button" @click="decryptAES" class="inline-block mb-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Decrypt</button>
    </div>
    <p v-show="showDecStr" class="mb-2 text-black dark:text-white text-lg">AES decrypted string:</p>
    <div v-show="showDecStr" class="rounded-lg p-2 w-full bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white">
        <div class="text-sm mb-1 flex justify-end"><p @click="copyToClipboard2" class="cursor-pointer">{{this.copyText2}}</p></div>
        <div class="w-full mb-1 break-all">
            {{this.decString}}
        </div>
    </div>
</template>