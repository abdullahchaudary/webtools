<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Speed Converter",
            units: ['m/s', 'km/h', 'mph', 'knot', 'ft/s', 'in/h', 'mm/h'],
            unitsText: ['Meter/sec', 'Kilometer/hour', 'Miles/hour', 'Knot', 'Feet/sec', 'Inch/hour', 'Millimeters/hour'],
            fromSelected: 'mph',
            toSelected: 'km/h'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>