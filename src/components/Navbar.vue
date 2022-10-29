<script>
import {RouterLink} from 'vue-router';

</script>

<template>
    <div class="navInner">
        <div class="navCat">
            <RouterLink :to="{name:'home'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Home</RouterLink>
        </div>
        <div class="navCat">
            <p class="text-lg mb-2">Hashing</p>
            <RouterLink :to="{name:'MD5-generator'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">MD5 generator</RouterLink>
            <RouterLink :to="{name:'SHA1-generator'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">SHA-1 generator</RouterLink>
            <RouterLink :to="{name:'SHA256-generator'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">SHA-256 generator</RouterLink>
            <RouterLink :to="{name:'SHA512-generator'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">SHA-512 generator</RouterLink>
            <RouterLink :to="{name:'SHA3-generator'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">SHA-3 generator</RouterLink>
            <RouterLink :to="{name:'RIPEMD160-generator'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">RIPEMD-160 generator</RouterLink>
            <RouterLink :to="{name:'PBKDF2-generator'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">PBKDF2 generator</RouterLink>
        </div>
        <div class="navCat">
            <p class="text-lg mb-2">Ciphers</p>
            <RouterLink :to="{name:'aes-encrypt-decrypt'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">AES Encrypt/Decrypt</RouterLink>    
            <RouterLink :to="{name:'des-encrypt-decrypt'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">DES Encrypt/Decrypt</RouterLink>    
            <RouterLink :to="{name:'tripledes-encrypt-decrypt'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">TripleDES Encrypt/Decrypt</RouterLink>    
            <RouterLink :to="{name:'rabbit-encrypt-decrypt'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Rabbit Encrypt/Decrypt</RouterLink>    
            <RouterLink :to="{name:'rc4-encrypt-decrypt'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">RC4 Encrypt/Decrypt</RouterLink>    
            <RouterLink :to="{name:'rc4drop-encrypt-decrypt'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">RC4Drop Encrypt/Decrypt</RouterLink>    
        </div>
        <div class="navCat">
            <p class="text-lg mb-2">Unit Converters</p>
            <RouterLink :to="{name:'unit-length'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Length Converter</RouterLink>    
            <RouterLink :to="{name:'unit-area'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Area Converter</RouterLink>    
            <RouterLink :to="{name:'unit-angle'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Angle Converter</RouterLink>    
            <RouterLink :to="{name:'unit-force'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Force Converter</RouterLink>    
            <RouterLink :to="{name:'unit-mass'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Mass Converter</RouterLink>    
            <RouterLink :to="{name:'unit-volume'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Volume Converter</RouterLink>    
            <RouterLink :to="{name:'unit-volume-flow-rate'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Volume Flow Rate Converter</RouterLink>    
            <RouterLink :to="{name:'unit-temperature'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Temperature Converter</RouterLink>    
            <RouterLink :to="{name:'unit-time'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Time Converter</RouterLink>    
            <RouterLink :to="{name:'unit-frequency'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Frequency Converter</RouterLink>    
            <RouterLink :to="{name:'unit-speed'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Speed Converter</RouterLink>    
            <RouterLink :to="{name:'unit-acceleration'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Acceleration Converter</RouterLink>    
            <RouterLink :to="{name:'unit-pace'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Pace Converter</RouterLink>    
            <RouterLink :to="{name:'unit-pressure'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Pressure Converter</RouterLink>    
            <RouterLink :to="{name:'unit-digitalsize'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Digital Size Converter</RouterLink>    
            <RouterLink :to="{name:'unit-illuminance'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Illuminance Converter</RouterLink>    
            <RouterLink :to="{name:'unit-partsper'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Parts-per Converter</RouterLink>    
            <RouterLink :to="{name:'unit-quantity'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Quantity Converter</RouterLink>    
            <RouterLink :to="{name:'unit-voltage'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Voltage Converter</RouterLink>    
            <RouterLink :to="{name:'unit-current'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Current Converter</RouterLink>    
            <RouterLink :to="{name:'unit-power'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Power Converter</RouterLink>    
            <RouterLink :to="{name:'unit-apparent-power'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Apparent Power Converter</RouterLink>    
            <RouterLink :to="{name:'unit-reactive-power'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Reactive Power Converter</RouterLink>    
            <RouterLink :to="{name:'unit-energy'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Energy Converter</RouterLink>    
            <RouterLink :to="{name:'unit-reactive-energy'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Reactive Energy Converter</RouterLink>    
            <RouterLink :to="{name:'unit-charge'}" class="navButton rounded-lg bg-neutral-200 dark:bg-neutral-900">Charge Converter</RouterLink>    
        </div>
    </div>
</template>