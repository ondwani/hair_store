import React from 'react'
import './product.css'

function ProductList() {
    return (
        <div className="ml-3 mr-5">
			<div className="row category-preview">
				<div className="col-md-6 col-sm-6">
					<img src="http://unsplash.it/550/400" className="img-responsive"/>
				</div>
				<div className="col-md-6 col-sm-6 category-preview-details">
					<h1 className="category-preview-title">Category Title Here</h1>
					<p className="category-preview-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod recusandae impedit, iure fugit illo aliquid rem culpa aspernatur porro maxime. Ab ea aut illum deleniti recusandae! Eum, a dolor asperiores modi fuga ut obcaecati, repudiandae, inventore, totam commodi nam alias numquam quas quo esse. Eveniet nisi delectus cupiditate dolorem itaque maiores voluptates, officiis ipsam eligendi exercitationem, possimus, aperiam sequi quisquam. Commodi dolorem accusamus deserunt impedit ex delectus assumenda quos a itaque, odit, inventore repellendus deleniti dolores tenetur tempore quam culpa dolor esse perspiciatis maxime facilis neque. Adipisci nostrum voluptate commodi itaque?</p>
				</div>
			</div>

			<div className="row product-row">
				<div className="col-md-4 col-sm-6 col-xs-6 product-single">
					<a href="./single-product.html">
						<img className="img-responsive" src="http://unsplash.it/560/320?image=1"/>
						<div className="product-details">
							<h2 className="product-title">product 1</h2>
							<h3 className="product-price">$20.00</h3>
						</div>
					</a>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-6 product-single">
					<a href="./single-product.html">
						<img className="img-responsive" src="http://unsplash.it/560/320?image=2"/>
						<div className="product-details">
							<h2 className="product-title">product 2</h2>
							<h3 className="product-price">$20.00</h3>
						</div>
					</a>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-6 product-single">
					<a href="./single-product.html">
						<img className="img-responsive" src="http://unsplash.it/560/320?image=2"/>
						<div className="product-details">
							<h2 className="product-title">product 2</h2>
							<h3 className="product-price">$20.00</h3>
						</div>
					</a>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-6 product-single">
					<a href="./single-product.html">
						<img className="img-responsive" src="http://unsplash.it/560/320?image=1"/>
						<div className="product-details">
							<h2 className="product-title">product 1</h2>
							<h3 className="product-price">$20.00</h3>
						</div>
					</a>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-6 product-single">
					<a href="./single-product.html">
						<img className="img-responsive" src="http://unsplash.it/560/320?image=2"/>
						<div className="product-details">
							<h2 className="product-title">product 2</h2>
							<h3 className="product-price">$20.00</h3>
						</div>
					</a>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-6 product-single">
					<a href="./single-product.html">
						<img className="img-responsive" src="http://unsplash.it/560/320?image=2"/>
						<div className="product-details">
							<h2 className="product-title">product 2</h2>
							<h3 className="product-price">$20.00</h3>
						</div>
					</a>
				</div>
			</div>
		</div>
    )
}

export default ProductList
