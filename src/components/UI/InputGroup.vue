<template>
	<div class="input-group">
		<input 
			:type="data.type" 
			:name="data.name" 
			:id="data.id"
			@input="$emit('input', $event.target.value)"
			placeholder=" "
		>
		<label :for="data.id">{{data.placeholder}}</label>
	</div>
</template>

<script>
export default {
	name: 'InputGroup',
	props: {
		data: {
			type: Object,
			default: {
				type: 'text',
				name: '',
				id: '',
				placeholder: 'placeholder'
			}
		}
	}
}
</script>

<style>

</style>