<script>
export default {
    data () {
        return {
            showHash: false,
            textString: 'hello world!',
            hashString: '',
            copyText: 'Copy',
            passStr: '',
            saltStr: '',
            outputLength: 128,
            iterations: 1,
        }
    },
    methods: {
        generateHash(){
            // if(this.passStr === ''){
                if (this.textString !== ''){
                    this.hashString = this.CryptoJS.PBKDF2(this.textString, this.saltStr, {
                        keySize: this.outputLength / 32,
                        iterations: this.iterations
                    });
                    this.showHash = true;
                } else {
                    this.showHash = false;
                }
            // } else {
            //     if (this.textString !== ''){
            //         this.hashString = this.CryptoJS.HmacSHA256(this.textString, this.passStr);
            //         this.showHash = true;
            //     } else {
            //         this.showHash = false;
            //     }
            // }
        },
        copyToClipboard(){
            navigator.clipboard.writeText(this.hashString);
            this.copyText = 'Copied!';
            setTimeout(()=>{
                this.copyText = 'Copy';
            },2000);
        },
        changeOutputLength(e){
            this.outputLength = e.target.value;
        },
        updateIterations(e){
            this.iterations = e.target.value;
        }
    }
}
</script>

<template>
    <p class="text-2xl mb-3">PBKDF2 hash generator</p>
    <!-- <input
        v-model="passStr"
        type="text"
        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded-lg transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Passphrase"
    /> -->
    <input
        v-model="saltStr"
        type="text"
        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded-lg transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Salt (optional)"
    />
    <textarea
        v-model="textString"
        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded-lg transition ease-in-out mb-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        rows="4"
        placeholder="Enter text"
    ></textarea>
    <div class="flex gap-3">
        <select @change="changeOutputLength" class="mb-3 form-select appearance-none
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Hash Length">
            <option selected value="128">128 bits</option>
            <option value="256">256 bits</option>
            <option value="512">512 bits</option>
        </select>
        <button type="button" @click="generateHash" class="inline-block mb-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Generate Hash</button>
        <div>
            <label for="iterationsSlider" class="form-label">Iterations: {{this.iterations}}</label>
            <input type="range" @input="updateIterations" min="1" step="1" max="1000" class="form-range w-full h-6 p-0 bg-blue focus:outline-none focus:ring-0 focus:shadow-none" id="iterationsSlider" />
        </div>
    </div>
    <p v-show="showHash" class="mb-2 text-black dark:text-white text-lg">PBKDF2 hash:</p>
    <div v-show="showHash" class="rounded-lg p-2 w-full bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white">
        <div class="text-sm mb-1 flex justify-end"><p @click="copyToClipboard" class="cursor-pointer">{{this.copyText}}</p></div>
        <div class="w-full mb-1 break-all">
            {{this.hashString}}
        </div>
    </div>
</template>