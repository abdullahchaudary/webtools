<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Length Converter",
            fromSelected: 'km',
            toSelected: 'mi',
            units: ['nm', 'μm', 'mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi'],
            unitsText: ['Nanometer', 'Micrometer', 'Millimeter', 'Centimeter', 'Meter', 'Kilometer', 'Inch', 'Yard', 'US Foot', 'Foot', 'Fathom', 'Mile', 'Nautical mile'],
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>