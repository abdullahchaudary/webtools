<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Charge Converter",
            units: ['c', 'mC', 'μC', 'nC', 'pC'],
            unitsText: ['Coulomb', 'Millicoulomb', 'Microcoulomb', 'Nanocoulomb', 'Picocoulomb'],
            fromSelected: 'c',
            toSelected: 'mC',
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>