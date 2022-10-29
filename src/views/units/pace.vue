<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Pace Converter",
            units: ['s/m', 'min/km', 's/ft', 'min/mi'],
            unitsText: ['Second/meter', 'Min/Kilometer', 'Sec/Foot', 'Min/Mile'],
            fromSelected: 'min/km',
            toSelected: 'min/mi'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>