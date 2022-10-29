<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Area Converter",
            fromSelected: 'ft2',
            toSelected: 'km2',
            units: ['mm2', 'cm2', 'm2', 'ha', 'km2', 'in2', 'ft2', 'ac', 'mi2'],
            unitsText: ['Square Millimeter', 'Square Centimeter', 'Square Meter', 'Hectare', 'Square Kilometer', 'Square Inch', 'Square Foot', 'Acre', 'Square Miles'],
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>