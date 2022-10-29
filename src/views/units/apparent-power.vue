<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Apparent Power Converter",
            units: ['VA', 'mVA', 'kVA', 'MVA', 'GVA'],
            unitsText: ['Volt Ampere', 'Millivolt Ampere', 'Kilovolt Ampere', 'Megavolt Ampere', 'Gigavolt Ampere'],
            fromSelected: 'VA',
            toSelected: 'mVA'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>