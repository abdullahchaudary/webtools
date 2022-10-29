<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Reactive Power Converter",
            units: ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'],
            unitsText: ['Volt-Amps reactive', 'Millivolt-amps reactive', 'Kilovolt-amps reactive', 'Megavolt-amps reactive', 'Gigavolt-amps reactive'],
            fromSelected: 'VAR',
            toSelected: 'mVAR'
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>