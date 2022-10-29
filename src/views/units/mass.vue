<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Mass Converter",
            fromSelected: 'kg',
            toSelected: 'lb',
            units: ['mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't'],
            unitsText: ['Microgram', 'Milligram', 'Gram', 'Kilogram', 'Ounce', 'Pound', 'Megatonne', 'Tonne'],
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>