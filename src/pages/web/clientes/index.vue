<template>
	<div style="height: 100%; background-color: #000000" class="borroso row">
		<div
			class="col-12 col-md-12 col-xs-12"
			style="height: 15vh; padding-top: 2%"
		>
			<div class="column flex-center">
				<div class="text-white column flex-center titulo-clientes">
					NUESTROS CLIENTES
				</div>
			</div>
		</div>
		<div class="col-12 col-md-12 col-xs-12">
			<div class="q-px-xs row cont-clientes"  data-aos="zoom-out-down">
				<div
					class="q-gutter-md q-pa-md row items-start col-md-3"
					v-for="transition in items"
					:key="transition.src"
				>
					<q-img
						:src="transition.src"
						:ratio="16 / 9"
						spinner-color="white"
						style="width: 380px"
						contain
						class="rounded-borders"
					>
						<div class="absolute-bottom text-center text-body2">
							{{ transition.nombre }}
						</div>
					</q-img>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./index.js"></script>

<style scoped lang="stylus">
@import './index.styl'
</style>
