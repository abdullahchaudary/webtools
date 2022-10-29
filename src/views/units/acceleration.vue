<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Acceleration Converter",
            units: ['g-force',  'm/s2'],
            unitsText: ['G-force',  'Meter/second square'],
            fromSelected: 'g-force',
            toSelected: 'm/s2',
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>