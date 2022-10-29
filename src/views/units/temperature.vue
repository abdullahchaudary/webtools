<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Temperature Converter",
            units: ["C", "F", "K", "R"],
            unitsText: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
            fromSelected: 'C',
            toSelected: 'F'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>