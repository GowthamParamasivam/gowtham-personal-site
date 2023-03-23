<script>
  import services from '../../resources/subpages/services';
//   import Product from '../components/pages/Product.svelte';
import Gallery from 'svelte-image-gallery'

function HandleClick(e) {
		console.log(
			`src: ${e.detail.src}, alt: ${e.detail.alt}, loading: ${e.detail.loading}, class: ${e.detail.class}`
		);
	}
</script>

<div class="services-container">
    <Gallery
	gap={15}
	maxColumnWidth={250}
	on:click={HandleClick}
	hover={true}
	loading="lazy"
>
	<img
		src="https://via.placeholder.com/210x170/100"
		alt="210x170"
		class="hi"
	/>
	<img src="https://via.placeholder.com/180x200/100" alt="180x200" />
</Gallery>
</div>



<!-- <span class="block bold mb-2">{services.header}</span>
<div class="services-container">
    {#each services.products as product}
        <div class="product">
            <Product {product}/>
        </div>
    {/each}
</div> -->



<style>
    .product {
        width: calc(50% - 15px);
    }

    .services-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
    }


    @media only screen and (max-width: 850px) {
        .product {
            width: 100%;
        }

        .services-container {
            column-gap: 0;
            row-gap: 10px;
        }
    }
</style>
