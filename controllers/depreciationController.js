const calculateDepreciation = (req, res) => {

    const {
        costOfAsset,
        salvageValue,
        duration
    } = req.body;

    if (
        costOfAsset === undefined ||
        salvageValue === undefined ||
        duration === undefined
    ) {
        return res.status(400).json({
            message: "All fields are required."
        });
    }

    if (
        costOfAsset <= 0 ||
        salvageValue < 0 ||
        duration <= 0
    ) {
        return res.status(400).json({
            message: "Invalid input values."
        });
    }

    if (salvageValue > costOfAsset) {
        return res.status(400).json({
            message: "Salvage value cannot be greater than asset cost."
        });
    }

    // Straight Line Depreciation

    const yearlyDepreciation =
        (costOfAsset - salvageValue) / duration;

    let currentBookValue = costOfAsset;

    const depreciationSchedule = [];

    for (let year = 1; year <= duration; year++) {

        currentBookValue -= yearlyDepreciation;

        depreciationSchedule.push({

            year,

            depreciationAmount: Number(
                yearlyDepreciation.toFixed(2)
            ),

            endBookValue: Number(
                currentBookValue.toFixed(2)
            )

        });
    }

    res.status(200).json({

        costOfAsset,

        salvageValue,

        duration,

        depreciationSchedule

    });

};

module.exports = {
    calculateDepreciation,
};