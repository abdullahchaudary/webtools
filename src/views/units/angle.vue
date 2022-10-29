<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Angle Converter",
            units: ['deg', 'rad', 'grad', 'arcmin', 'arcsec'],
            unitsText: ['Degrees', 'Radians', 'Gradian', 'Arc minute', 'Arc second'],
            fromSelected: 'deg',
            toSelected: 'rad',
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>