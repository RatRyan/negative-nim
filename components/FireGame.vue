<script setup lang="ts">
type Fire = {
	img: "/click-fire.png";
	clicked: Boolean;
};

const fires = reactive<Fire[]>([]);
fires.push({ img: "/click-fire.png", clicked: false });
fires.push({ img: "/click-fire.png", clicked: false });
fires.push({ img: "/click-fire.png", clicked: false });
</script>

<template>
	<div class="content">
		<div class="fire-div" v-for="fire in fires">
			<img
				:src="fire.img"
				@click="fire.clicked = !fire.clicked"
				class="fire"
				v-if="!fire.clicked"
			/>
		</div>
		<img src="/house-fire.png" />
	</div>
</template>

<style scoped>
.content {
	position: relative;
}
.fire {
	width: 100px;
	height: 100px;
	margin: 10px;
}
</style>
