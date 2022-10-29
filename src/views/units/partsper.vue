<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Parts-per Converter",
            units: ['ppm', 'ppb', 'ppt', 'ppq'],
            unitsText: ['Parts per million', 'Parts per billion', 'Parts per trillion', 'Parts per quadrillion'],
            fromSelected: 'ppm',
            toSelected: 'ppb'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>