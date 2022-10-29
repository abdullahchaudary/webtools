<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Pressure Converter",
            units: ['Pa', 'hPa', 'kPa', 'MPa', 'bar', 'torr', 'psi', 'ksi'],
            unitsText: ['Pascal', 'Hectopascal', 'Kilopascal', 'Megapascal', 'Bar', 'Torr', 'Pound/square inch', 'Kilopound/square'],
            fromSelected: 'bar',
            toSelected: 'psi'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>