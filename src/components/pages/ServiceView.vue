<script setup>
import PageHeader from '@/components/UI/ThePageHeader.vue';
import Breadcrumbs from '@/components/UI/TheBreadcrumbs.vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const router = useRoute();

const breadcrumbsList = router.meta.breadcrumbs;

</script>

<template>
	<div class="container service__container">
		<PageHeader :pageTitle="t('pages.service.title')" >
			<Breadcrumbs :breadcrumbs="breadcrumbsList"/>
		</PageHeader>
	</div>
	<section class="section">
		<div class="container">
			<Loader />
		</div>
	</section>
		
</template>

<style lang="scss">

</style>