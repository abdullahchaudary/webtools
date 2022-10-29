<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Force Converter",
            units: ['N', 'kN', 'lbf'],
            unitsText: ['Newton', 'Kilo Newton', 'Pound Foot'],
            fromSelected: 'N',
            toSelected: 'lbf',
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>