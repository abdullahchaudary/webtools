<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Illuminance Converter",
            units: ['lx', 'ft-cd'],
            unitsText: ['Lux', 'Foot-candle'],
            fromSelected: 'lx',
            toSelected: 'ft-cd'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>