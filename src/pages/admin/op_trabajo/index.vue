<template>
	<div>
		<q-page-sticky
			position="bottom-right"
			:offset="[18, 18]"
			v-if="$q.platform.is.mobile"
		>
			<q-btn fab icon="add" color="accent" @click="modal_nuevo = true" />
		</q-page-sticky>
		<q-breadcrumbs active-color="accent" v-if="$q.platform.is.desktop">
			<template v-slot:separator>
				<q-icon size="1.2em" name="arrow_forward" color="accent" />
			</template>

			<q-breadcrumbs-el label="Home" icon="home" to="/" class="b_link" />
			<q-breadcrumbs-el
				:label="parametros_tabla.tittle"
				icon="fab fa-whmcs"
				class="b_activo"
			/>

			<div class="flex items-center justify-end q-gutter-sm">
				<q-chip clickable @click="modal_nuevo = true" class="btn_add">
					<q-avatar class="activo icon_add" text-color="white">
						<span class="material-icons"> add </span>
					</q-avatar>
					Crear Nuevo
				</q-chip>
			</div>
		</q-breadcrumbs>
		<div v-if="$q.platform.is.mobile">
			<tabla :parametros="parametros_tabla" :funciones="funciones" />
		</div>
		<div style="padding-top: 2%" v-else>
			<tabla :parametros="parametros_tabla" :funciones="funciones" />
		</div>
		<q-dialog
			v-model="modal_nuevo"
			persistent
			transition-show="slide-up"
			transition-hide="slide-down"
		>
			<q-card
				class="modales"
				style="width: 900px; max-width: 90vw !important"
				color="primary"
			>
				<q-card-section align="center">
					<div class="text-h6 titulo_crear" color="text">
						Nuevo Item
					</div>
				</q-card-section>
				<q-card-section class="area_comment">
					<div class="row">
						<div class="col-6">
							<q-input
								dense
								standout
								required
								label="Cargo"
								v-model="nuevo_cargo"
								class="input-reg q-mx-lg"
							>
							</q-input>
							<q-input
								dense
								standout
								required
								label="Descripción"
								v-model="nuevo_descripcion"
								type="textarea"
								rows="13"
								class="input-reg q-mx-lg"
							>
							</q-input>
						</div>
						<div class="col-6">
							<q-input
								dense
								standout
								required
								label="Link"
								v-model="nuevo_link"
								class="input-reg q-mx-lg"
							>
							</q-input>
							<q-input
								dense
								standout
								required
								label="Hotel"
								v-model="nuevo_hotel"
								class="input-reg q-mx-lg"
							>
							</q-input>
							<q-input
								dense
								standout
								required
								label="Web"
								v-model="nuevo_web"
								class="input-reg q-mx-lg"
							>
							</q-input>
							<q-input
								dense
								standout
								v-model="nuevo_banner"
								type="file"
								class="input-reg q-mx-lg"
							>
								<template v-slot:append>
									<q-icon name="attachment" />
								</template>
							</q-input>
							<q-select
								dense
								standout
								required
								v-model="nuevo_estado"
								:options="estados"
								label="Estado"
								class="input-reg q-mx-lg"
							/>
						</div>
					</div>
				</q-card-section>
				<div class="q-pb-lg" style="text-align: center">
					<q-btn
						rounded
						@click.native="modal_nuevo = false"
						class="cancelar"
						>Cancelar</q-btn
					>
					<q-btn
						rounded
						class="bg-accent text-white"
						@click="guardar_nuevo()"
						>Guardar</q-btn
					>
				</div>
			</q-card>
		</q-dialog>
		<q-dialog
			v-model="modal_editar"
			persistent
			transition-show="slide-up"
			transition-hide="slide-down"
		>
			<q-card
				class="modales"
				style="width: 900px; max-width: 90vw !important"
			>
				<q-card-section align="center">
					<div class="text-h6 titulo_crear" color="text">
						Editar Registro
					</div>
				</q-card-section>
				<q-card-section class="area_comment">
					<div class="row">
						<div class="col-6">
							<q-input
								dense
								standout
								required
								label="Cargo"
								v-model="editar_cargo"
								class="input-reg q-mx-lg"
							>
							</q-input>
							<q-input
								dense
								standout
								required
								label="Descripción"
								v-model="editar_descripcion"
								type="textarea"
								rows="13"
								class="input-reg q-mx-lg"
							>
							</q-input>
						</div>
						<div class="col-6">
							<q-input
								dense
								standout
								required
								label="Link"
								v-model="editar_link"
								class="input-reg q-mx-lg"
							>
							</q-input>
							<q-input
								dense
								standout
								required
								label="Hotel"
								v-model="editar_hotel"
								class="input-reg q-mx-lg"
							>
							</q-input>
							<q-input
								dense
								standout
								required
								label="Web"
								v-model="editar_web"
								class="input-reg q-mx-lg"
							>
							</q-input>
							<q-input
								dense
								standout
								v-model="editar_banner"
								type="file"
								class="input-reg q-mx-lg"
							>
								<template v-slot:append>
									<q-icon name="attachment" />
								</template>
							</q-input>
							<q-select
								dense
								standout
								required
								v-model="editar_estado"
								:options="estados"
								label="Estado"
								class="input-reg q-mx-lg"
							/>
						</div>
					</div>
				</q-card-section>
				<div class="q-pb-lg" style="text-align: center">
					<q-btn
						rounded
						@click.native="modal_editar = false"
						class="cancelar"
						>Cancelar</q-btn
					>
					<q-btn
						rounded
						class="bg-accent text-white"
						@click="guardar_editar()"
						>Guardar</q-btn
					>
				</div>
			</q-card>
		</q-dialog>
		<q-dialog persistent width="800" v-model="modal_eliminar">
			<q-card class="modales" style="width: 800px">
				<q-card-section align="center">
					<div class="text-h6 cargo_crear" color="text">
						Eliminar registro
					</div>
				</q-card-section>
				<q-card-section
					align="center"
					v-if="parametros_tabla.selected.length > 1"
				>
					<div class="text-h6 b_eliminar" color="text">
						¿Está seguro que desea eliminar estos
						{{ parametros_tabla.selected.length }} registros?
					</div>
				</q-card-section>
				<q-card-section
					align="center"
					v-if="parametros_tabla.selected.length == 1"
				>
					<div class="text-h6 b_eliminar" color="text">
						¿Está seguro que desea eliminar el registro
						<div class="text-h6 n_eliminar" color="text">
							{{ parametros_tabla.selected[0].nombre }}
						</div>
						?
					</div>
				</q-card-section>
				<div class="q-pb-lg" style="text-align: center">
					<q-btn
						rounded
						@click.native="modal_eliminar = false"
						class="cancelar"
						>Cancelar</q-btn
					>
					<q-btn
						rounded
						class="bg-accent text-white"
						@click="guardar_eliminar()"
						>Guardar</q-btn
					>
				</div>
			</q-card>
		</q-dialog>
		<q-dialog persistent width="800" v-model="modal_banner">
			<q-card class="modales" style="max-width: 90vw; max-height: 90vh">
				<q-card-section align="center">
					<q-img
						:src="banner"
						style="width: 80vw; max-height: 70vh"
					></q-img>
				</q-card-section>
				<div class="q-pb-lg" style="text-align: center">
					<q-btn
						rounded
						@click.native="modal_banner = false"
						color="accent"
						>Aceptar</q-btn
					>
				</div>
			</q-card>
		</q-dialog>
	</div>
</template>

<script src="./index.js"></script>
