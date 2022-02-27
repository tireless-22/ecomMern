import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
		
	},
		rating: {
		type: String,
		require: true,
		
	},
			comment: {
		type: String,
		require: true,
		
	},
}, { timestamps: true })


const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
						ref="User"
		},
			name: {
      type: String,
      require: true,
  
    },
    image: {
      type: String,
      require: true,

    },
    brand: {
      type: String,
      require: true,
    },

    category: {
      type: Boolean,
      require: true,
     
		},
				
			description: {
      type: String,
      require: true,
     
		},
			
			reviews:[reviewSchema],
			
			
			
			 rating: {
									type: Number,
									default:0,
      require: true,
     
		},
		numReviews: {
						default:0,
      type: Number,
      require: true,
     
		},
			price: {
						default:0,
      type: Number,
      require: true,
     
		},
				countInStock: {
						default:0,
      type: Number,
      require: true,
     
		},
												
  },
  { timestamps: true }
);

const Product= mongoose.model("Product", procudctSchema);
export default Product;
