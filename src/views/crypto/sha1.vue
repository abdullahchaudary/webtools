<script>
export default {
    data () {
        return {
            showHash: false,
            textString: 'hello world!',
            hashString: '',
            copyText: 'Copy',
            hmacStr: '',
        }
    },
    methods: {
        generateHash(){
            if(this.hmacStr === ''){
                if (this.textString !== ''){
                    this.hashString = this.CryptoJS.SHA1(this.textString);
                    this.showHash = true;
                } else {
                    this.showHash = false;
                }
            } else{
                if (this.textString !== ''){
                    this.hashString = this.CryptoJS.HmacSHA1(this.textString, this.hmacStr);
                    this.showHash = true;
                } else {
                    this.showHash = false;
                }
            }
        },
        copyToClipboard(){
            navigator.clipboard.writeText(this.hashString);
            this.copyText = 'Copied!';
            setTimeout(()=>{
                this.copyText = 'Copy';
            },2000);
        }
    }
}
</script>

<template>
    <p class="text-2xl mb-3">SHA-1 hash generator</p>
    <input
        v-model="hmacStr"
        type="text"
        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded-lg transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="HMAC String (optional)"
    />
    <textarea
        v-model="textString"
        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded-lg transition ease-in-out mb-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        rows="4"
        placeholder="Enter text"
    ></textarea>
    <button type="button" @click="generateHash" class="inline-block mb-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Generate Hash</button>
    <p v-show="showHash" class="mb-2 text-black dark:text-white text-lg">SHA-1 hash:</p>
    <div v-show="showHash" class="rounded-lg p-2 w-full bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white">
        <div class="text-sm mb-1 flex justify-end"><p @click="copyToClipboard" class="cursor-pointer">{{this.copyText}}</p></div>
        <div class="w-full mb-1 break-all">
            {{this.hashString}}
        </div>
    </div>
</template>