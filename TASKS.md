# Proposed Fixes

## Typo
* **Issue:** The alternate landing page description in `src/v2.html` says "Human-graded," which is a grammatical typo for "human-grade."
* **Suggested fix:** Update the meta description to use "human-grade" so the copy matches common food safety terminology.

## Bug
* **Issue:** Product cards in `src/recipes.html` advertise dog recipes at 25,000 RP, but `src/main.js` hard-codes the shared product price as 35,000 RP. Selecting an item in the quick-order form therefore shows and sends the wrong price.
* **Suggested fix:** Align the prices between the data object and the UI (e.g., update the `price` constant or per-item prices so the quick-order modal and WhatsApp message reflect the advertised cost).

## Documentation Discrepancy
* **Issue:** In `resize.js` the comment "The directory where you want to save the new images" precedes the `inputDir` variable, but that variable actually points to the source image path, not the output directory.
* **Suggested fix:** Correct the comment (and the surrounding run instructions, if desired) so it explains that `inputDir` resolves the input file and doesn't mislead developers.

## Test Improvement
* **Issue:** The WhatsApp quick-order handler in `src/main.js` constructs the outbound message inline without any automated verification, making it easy to introduce regressions in the encoded message format.
* **Suggested fix:** Extract the message-formatting logic into a testable helper and add a unit test (e.g., with Vitest) to confirm the encoded WhatsApp URL includes the selected product name, fixed size, quantity, and line breaks as expected.
