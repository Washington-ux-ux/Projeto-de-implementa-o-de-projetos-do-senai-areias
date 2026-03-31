import RecipeJson from "../data/recipe.json"

export const findAllRecipe = async ():Promise<typeof RecipeJson> => {
    return RecipeJson
}

export const findRecipeById = async (id: number) => {
    const recipes = await findAllRecipe()
    return recipes.find(recipe => recipe.id === id)
}

export const findRecipeByCategory = async (category: string) => {
    const recipes = await findAllRecipe()
    return recipes.filter(recipe => recipe.category === category)
}

export const findRecipeByIngredient = async (ingredient: string) => {
    const recipes = await findAllRecipe()
    return recipes.filter(recipe => 
        recipe.ingredients.some(ing => 
            ing.toLowerCase().includes(ingredient.toLowerCase())
        )
    )
}