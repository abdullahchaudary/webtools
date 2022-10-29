<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Power Converter",
            units: ['W', 'mW', 'kW', 'MW', 'GW', 'PS', 'Btu/s', 'ft-lb/s', 'hp'],
            unitsText: ['Watt', 'Milliwatt', 'Kilowatt', 'Megawatt', 'Gigawatt', 'PferdStarke', 'British thermal unit/sec', 'Foot-pound/sec', 'Horsepower'],
            fromSelected: 'kW',
            toSelected: 'hp'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>