<script>
import UnitsConverter from '../../components/UnitsConverter.vue';

export default {
    data() {
        return {
            heading: "Quantity/Pieces Converter",
            units: ['pcs', 'bk-doz', 'cp', 'doz-doz', 'doz', 'gr-gr', 'gros', 'half-dozen', 'long-hundred', 'ream', 'scores', 'sm-gr', 'trio'],
            unitsText: ['Pieces', 'Bakers dozen', 'Couples', 'Dozen', 'Dozen', 'Goods received', 'Gross', 'Half dozen', 'Long hundred', 'Ream', 'Scores', 'Small Gross', 'Trio'],
            fromSelected: 'pcs',
            toSelected: 'doz',
        };
    },
    components: { UnitsConverter }
}
</script>

<template>
    <UnitsConverter :heading="heading" :units="units" :unitsText="unitsText" :fromSelect="fromSelected" :toSelect="toSelected"/>
</template>