<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Current Converter",
            units: ['A', 'mA', 'kA'],
            unitsText: ['Ampere', 'Milliampere', 'Kiloampere'],
            fromSelected: 'A',
            toSelected: 'mA'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>