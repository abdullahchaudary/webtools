<script>
export default {
    props: {
        heading: String,
        units: Array,
        unitsText: Array,
        fromSelect: String,
        toSelect: String
    },
    data () {
        return {
            showRes: false,
            copyText: 'Copy',
            inVal: null,
            resultVal: null,
            fromSelected: this.fromSelect,
            toSelected: this.toSelect
        }
    },
    methods: {
        convertUnits(){
            if(this.inVal !== null){
                this.resultVal = this.convertLib(parseFloat(this.inVal)).from(this.fromSelected).to(this.toSelected);
                this.showRes = true;
            } else {
                this.showRes = false;
            }
        },
        copyToClipboard(){
            navigator.clipboard.writeText(this.resultVal);
            this.copyText = 'Copied!';
            setTimeout(()=>{
                this.copyText = 'Copy';
            },2000);
        }
    }
}
</script>

<template>
    <p class="text-2xl mb-3">{{heading}}</p>
    <input
        v-model="inVal"
        type="text"
        class="form-control block w-full px-3 py-1.5 text-base font-normal bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white bg-clip-padding border border-solid border-gray-300 dark:border-gray-800 rounded-lg transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Input Value"
        @input="convertUnits"
    />
    <div class="flex gap-3">
        <div>
            <label for="fromSelect" class="form-label inline-block mb-2 text-black dark:text-white">From {{this.fromSelected}}</label>
            <select class="form-select
                block
                px-3
                py-1.5
                text-sm
                font-normal
                text-black dark:text-white
                bg-neutral-200 dark:bg-neutral-900 bg-clip-padding bg-no-repeat
                rounded-lg
                transition
                ease-in-out
                mb-3
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="fromSelect" v-model="fromSelected" @change="convertUnits" aria-label="Select conversion from">
                <option v-for="(unit, index) in units" :value="unit" >{{this.unitsText[index]}}</option>
            </select>
        </div>
        <div>
            <label for="toSelect" class="form-label inline-block mb-2 text-black dark:text-white">To {{this.toSelected}}</label>
            <select class="form-select
                block
                px-3
                py-1.5
                text-sm
                font-normal
                text-black dark:text-white
                bg-neutral-200 dark:bg-neutral-900 bg-clip-padding bg-no-repeat
                rounded-lg
                transition
                ease-in-out
                mb-3
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" v-model="toSelected" @change="convertUnits" id="toSelect" aria-label="Select conversion to">
                <option v-for="(unit, index) in units" :value="unit" >{{this.unitsText[index]}}</option>
            </select>
        </div>
    </div>
    <p v-show="showRes" class="mb-2 text-black dark:text-white text-lg">Converted from {{this.fromSelected}} to {{this.toSelected}}:</p>
    <div v-show="showRes" class="rounded-lg p-2 w-full bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white">
        <div class="text-sm mb-1 flex justify-end"><p @click="copyToClipboard" class="cursor-pointer">{{this.copyText}}</p></div>
        <div class="w-full mb-1 break-all">
            {{this.resultVal}}
        </div>
    </div>
</template>