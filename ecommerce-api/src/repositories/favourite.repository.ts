import { JsonRepository } from "./json.repository.js";
import type { UserFavourite } from "../types/favourite.types.js";

class FavouriteRepository extends JsonRepository<UserFavourite> {
    constructor() {
        super("favourites.json");
    }

    async findByUserId(
        userId: number
    ): Promise<UserFavourite | undefined> {
        const favourites = await this.readAll();

        return favourites.find(item => item.userId === userId);
    }

    async saveFavourites(
        favourite: UserFavourite
    ): Promise<UserFavourite> {
        const favourites = await this.readAll();

        const index = favourites.findIndex(
            item => item.userId === favourite.userId
        );

        if (index === -1) {
            favourites.push(favourite);
        } else {
            favourites[index] = favourite;
        }

        await this.writeAll(favourites);

        return favourite;
    }
}

export default new FavouriteRepository();