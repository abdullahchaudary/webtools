<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Voltage Converter",
            units: ['V', 'mV', 'kV'],
            unitsText: ['Volt', 'Millivolt', 'Kilovolt'],
            fromSelected: 'V',
            toSelected: 'mV'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>