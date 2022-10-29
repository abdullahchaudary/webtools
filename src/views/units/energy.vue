<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Energy Converter",
            units: ['Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ', 'MJ', 'GJ'],
            unitsText: ['Watt-hour', 'Milliwatt-hour', 'Kilowatt-hour', 'Megawatt-hour', 'Gigawatt-hour', 'Joule', 'Kilojoule', 'Megajoule', 'Gigajoule'],
            fromSelected: 'Wh',
            toSelected: 'J'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>