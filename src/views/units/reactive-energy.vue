<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Reactive Energy Converter",
            units: ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'],
            unitsText: ['VAR hour', 'Milli-VAR hour', 'Kilo-VAR hour', 'Mega-VAR hour', 'Giga-VAR hours'],
            fromSelected: 'VARh',
            toSelected: 'mVARh'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>