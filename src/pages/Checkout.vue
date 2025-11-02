<template>
  <section class="max-w-6xl mx-auto p-4 md:p-8">
    <CartBreadcrumb />
    <TrackOrdersLink />
    <CartTable />
    <CartSummary />
    <RelatedProducts />
  </section>
</template>

<script setup>
import CartBreadcrumb from '@/components/TheCart/CartBreadcrumb.vue'
import TrackOrdersLink from '@/components/TheCart/TrackOrdersLink.vue'
import CartTable from '@/components/TheCart/CartTable.vue'
import CartSummary from '@/components/TheCart/CartSummary.vue'
import RelatedProducts from '@/components/TheCart/RelatedProducts.vue'
</script>
