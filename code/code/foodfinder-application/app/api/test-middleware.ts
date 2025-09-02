import type {NextApiRequest, NextApiResponse} from "next";

import dbConnect from "middleware/db-connect";
import Locations from "mongoose/locations/model";

export default async function handler(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: NextApiRequest, res: NextApiResponse<any>
) {
    await dbConnect();
    const locations = await Locations.find({});
    res.status(200).json(locations);
}