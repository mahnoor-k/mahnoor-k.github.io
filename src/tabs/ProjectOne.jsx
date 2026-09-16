const asset = (name) => `${import.meta.env.BASE_URL}assets/cs180/project1/${name}`;

const singleScaleResults = [
  { name: "Cathedral", file: "cathedral", green: "(2, 5)", red: "(3, 12)" },
  { name: "Monastery", file: "monastery", green: "(2, -3)", red: "(2, 3)" },
  { name: "Tobolsk", file: "tobolsk", green: "(3, 3)", red: "(3, 6)" },
];
const multiScaleResults = [
  {
    "name": "Church",
    "file": "church",
    "green": "(4, 25)",
    "red": "(-4, 58)"
  },
  {
    "name": "Emir",
    "file": "emir",
    "green": "(24, 49)",
    "red": "(-205, 141)"
  },
  {
    "name": "Harvesters",
    "file": "harvesters",
    "green": "(17, 60)",
    "red": "(13, 124)"
  },
  {
    "name": "Icon",
    "file": "icon",
    "green": "(17, 41)",
    "red": "(23, 89)"
  },
  {
    "name": "Ilemselga",
    "file": "ilemselga",
    "green": "(7, 40)",
    "red": "(11, 130)"
  },
  {
    "name": "Melons",
    "file": "melons",
    "green": "(11, 82)",
    "red": "(13, 178)"
  },
  {
    "name": "Religious Painting",
    "file": "religous_painting",
    "green": "(3, 28)",
    "red": "(7, 68)"
  },
  {
    "name": "Self Portrait",
    "file": "self_portrait",
    "green": "(29, 79)",
    "red": "(37, 176)"
  },
  {
    "name": "Siren",
    "file": "siren",
    "green": "(-6, 49)",
    "red": "(-25, 96)"
  },
  {
    "name": "Three Generations",
    "file": "three_generations",
    "green": "(14, 53)",
    "red": "(11, 112)"
  },
  {
    "name": "Wharf",
    "file": "wharf",
    "green": "(-7, 15)",
    "red": "(-16, 83)"
  }
];
const additionalResults = [
  {
    "name": "Bridge",
    "file": "bridge",
    "green": "(-11, 67)",
    "red": "(-28, 118)"
  },
  {
    "name": "Clothing",
    "file": "clothing",
    "green": "(-18, 25)",
    "red": "(-38, 116)"
  },
  {
    "name": "Sitting Woman",
    "file": "sitting_woman",
    "green": "(21, 38)",
    "red": "(35, 76)"
  }
];

function PyramidResults({ results, group }) {
  return (
    <div className="p1-single-examples">
      {results.map(({ name, file, green, red }) => (
        <section className="p1-single-example" key={file} aria-labelledby={`${group}-${file}`}>
          <h3 id={`${group}-${file}`}>{name}</h3>
          <div className="p1-single-images">
            <figure className="cs180-photo-card">
              <img src={asset(`${file}.jpg`)} alt={`${name} original glass plate`} loading="lazy" />
              <figcaption>{name} · Original glass plate (B, G, R)</figcaption>
            </figure>
            <div className="p1-single-outputs">
              <figure className="cs180-photo-card">
                <img src={asset(`unaligned_${file}.jpg`)} alt={`${name} before alignment`} loading="lazy" />
                <figcaption>Unaligned</figcaption>
              </figure>
              <figure className="cs180-photo-card">
                <img src={asset(`aligned_${file}.jpg`)} alt={`${name} after multi-scale alignment`} loading="lazy" />
                <figcaption>Aligned · Multi-scale<span className="p1-photo-offsets">Green (x, y): {green}<br />Red (x, y): {red}</span></figcaption>
              </figure>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
export default function ProjectOne({ onBack }) {
  const printProject = () => {
    document.body.classList.add("printing-cs180");
    window.addEventListener("afterprint", () => document.body.classList.remove("printing-cs180"), { once: true });
    window.print();
  };

  return (
    <article className="cs180-project-page cs180-project-one">
      <button className="cs180-back" onClick={onBack}>← All projects</button>
      <header className="cs180-project-hero">
        <span className="cs180-kicker">CS 180 · Project 1 · Fall 2026</span>
        <h1>Images of the Russian Empire</h1>
        <p>Colorizing the Prokudin-Gorskii photo collection</p>
        <p className="p1-byline">Mahnoor</p>
      </header>

      <section className="cs180-section">
        <div className="cs180-section-number">01</div>
        <div className="cs180-section-copy">
          <h2>From three exposures to one color image</h2>
          <div className="p1-intro-layout">
            <div className="p1-intro-text">
              <p>A century ago, Sergei Prokudin-Gorskii traveled across the Russian Empire with a camera and a way to capture more than shades of gray. For each scene, he took three exposures: one through a blue filter, one through green, and one through red. On their own, they look like ordinary black-and-white photographs. But together, they hold the colors of the people, buildings, and landscapes in front of him.</p>
              <p>Now you must be wondering: how can three black-and-white images hold color? Each exposure basically records how much light passes through one filter: red, green, or blue. So, a bright area in the red-filtered image means that part of the scene reflected plenty of red light. To reconstruct the photograph, those three brightness values become the red, green, and blue (RGB) components of each pixel. Different combinations create different colors. For example, strong red and green with little blue would give you yellow, while high values in all three produce white. The key is making sure the three values describe the same point in the scene, which is where alignment comes in.</p>
              <p>This project starts with scans of those glass plates and brings the three views back together. There’s one issue though! The exposures were taken one after another, meaning that between shots, the camera could shift slightly or a person could move, causing the same subject to appear in different positions between the three exposures. If we combine the exposures as they are, we get a blurry, misaligned image. Thus, this project uses Python to split each scan into three exposures and shift them until the stationary features line up as closely as possible to reveal the color photograph.</p>
            </div>
            <figure className="cs180-photo-card p1-intro-plate">
            <img src={asset("cathedral_plate.jpg")} alt="Cathedral glass-plate scan showing three black-and-white exposures stacked vertically: blue-filter exposure at the top, green in the middle, and red at the bottom" />
            <figcaption>Three exposures, one scene. From top to bottom: blue, green, and red.</figcaption>
          </figure>
          </div>
        </div>
      </section>

      <section className="cs180-section">
        <div className="cs180-section-number">02</div>
        <div className="cs180-section-copy p1-single-copy">
          <h2>Single-scale Alignment</h2>
          <p>For the smaller JPEG images, I try every possible shift within a small area. After splitting the scan into blue, green, and red channels, I keep blue fixed and move green and red separately. Each channel can move up to 15 pixels left, right, up, or down. That gives 31 horizontal positions and 31 vertical positions, or 961 combinations to check. Trying all of them is called <strong>exhaustive search</strong>.</p>
          <p>But how does the algorithm know which shift looks best? I use <strong>normalized cross-correlation (NCC)</strong> to compare the pattern of light and dark areas in the two channels. The same scene can be brighter through one filter than another, so comparing the pixel values directly can be misleading. NCC adjusts for overall brightness and contrast differences before comparing the patterns. The shift with the highest score is the one the algorithm chooses.</p>
          <div className="p1-formula" aria-label="NCC equals the dot product of the two flattened, normalized image regions">
            <strong>NCC = </strong>
            <span>[(image1 − mean(image1)) ./ ‖image1 − mean(image1)‖]</span>
            <strong className="p1-dot-product"> · </strong>
            <span>[(image2 − mean(image2)) ./ ‖image2 − mean(image2)‖]</span>
          </div>
          <p>Here’s what each part of the formula does. The same steps are applied to both images:</p>
          <ul className="p1-ncc-steps">
            <li><strong>mean(image1): find the average brightness.</strong> Add all the pixel values and divide by the number of pixels. This gives a baseline for deciding which parts are light or dark.</li>
            <li><strong>image1 − mean(image1): subtract that baseline.</strong> A pixel brighter than the average becomes positive, and a darker pixel becomes negative. Now the values describe the light and dark pattern instead of the image’s overall brightness.</li>
            <li><strong>‖image1 − mean(image1)‖: measure the size of those differences.</strong> Square the adjusted values, add them, and take the square root. Stronger differences between light and dark produce a larger number.</li>
            <li><strong>./: divide each adjusted value by that number.</strong> This puts both images on the same scale. If one image has twice the differences from its average, its denominator also doubles, so the normalized values stay the same.</li>
                      <li><strong>·: take the dot product to get the NCC score.</strong> After flattening both normalized images into lists in the same pixel order, I multiply matching values and add the results. Matching light areas and matching dark areas contribute positively, while disagreements contribute negatively. A score closer to 1 means a closer match between the normalized patterns. The algorithm keeps the shift with the highest score.</li>
          </ul>
          <p>I also leave the edges out of the comparison. The scans have borders, and shifting with wrapping can bring pixels from one edge around to the opposite side. To keep those pixels from affecting the score, I ignore a margin of 10% on each axis, using at least 16 pixels. Every shift is judged using the same interior area. The full image is still kept in the saved result.</p>
        </div>
        <div className="p1-single-examples">
          {singleScaleResults.map(({ name, file, green, red }) => (
            <section className="p1-single-example" key={file} aria-labelledby={`single-${file}`}>
              <h3 id={`single-${file}`}>{name}</h3>
              <div className="p1-single-images">
                <figure className="cs180-photo-card">
                  <img src={asset(`${file}.jpg`)} alt={`${name} original glass plate with blue, green, and red exposures stacked vertically`} loading="lazy" />
                  <figcaption>{name} · Original glass plate (B, G, R)</figcaption>
                </figure>
                <div className="p1-single-outputs">
                  <figure className="cs180-photo-card">
                    <img src={asset(`unaligned_${file}.jpg`)} alt={`${name} before alignment`} loading="lazy" />
                    <figcaption>Unaligned</figcaption>
                  </figure>
                  <figure className="cs180-photo-card">
                    <img src={asset(`aligned_${file}.jpg`)} alt={`${name} after single-scale NCC alignment`} loading="lazy" />
                    <figcaption>Aligned · Single-scale NCC<span className="p1-photo-offsets">Green (x, y): {green}<br />Red (x, y): {red}</span></figcaption>
                  </figure>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="cs180-section">
        <div className="cs180-section-number">03</div>
        <div className="cs180-section-copy">
          <h2>Multi-scale pyramid alignment</h2>
          <p>The small JPEGs are a good starting point, but the large TIFFs make the search much harder. A 15-pixel window might not reach the correct alignment, while testing a much wider range of shifts at full resolution would take too long. Instead, I use an image pyramid, repeatedly shrinking each image to half its size. Large shifts become smaller at these lower resolutions, making them easier and faster to find.</p>
          <p>The algorithm keeps shrinking the images until the longest side is 256 pixels or less. At this smallest level, it uses NCC to find a rough alignment. It then returns to the next larger version, which is roughly twice the size, and doubles the estimated shift. For example, a shift of 5 pixels at the smaller size becomes a starting estimate of 10 pixels at the larger size. From there, it searches within two pixels of that estimate horizontally and vertically to refine the match. This repeats until it reaches the original resolution. Each level builds on the previous estimate, avoiding a wide search at full size.</p>
        </div>
        <PyramidResults results={multiScaleResults} group="pyramid" />
      </section>
      <section className="cs180-section">
        <div className="cs180-section-number">04</div>
        <div className="cs180-section-copy">
          <h2>Additional collection images</h2>
          <p>Bridge, Clothing, and Sitting Woman provide three additional examples. Their computed offsets and saved results are shown below.</p>
        </div>
        <PyramidResults results={additionalResults} group="additional" />
      </section>
      <section className="cs180-section">
        <div className="cs180-section-number">05</div>
        <div className="cs180-section-copy">
          <h2>Limitations and observations</h2>
          <p>The Emir photo is where the alignment clearly goes wrong: the red-channel version of his face is shifted far away from the others, creating a separate, displaced outline. The algorithm chose a red offset of (-205, 141), so this is much more than a small colored border.</p>
          <p>A likely reason is that the Emir’s clothing appears bright in one channel and dark in another, making it harder for NCC to find matching patterns. Since NCC compares the entire image region, the shift with the highest score may still leave his face far out of alignment. If that wrong match is chosen at the smallest pyramid level, later steps only search near that estimate and may not correct it. Matching edges instead of brightness could help, since features like the outline of his face stay in the same position across channels when correctly aligned.</p>
        </div>
      </section>
    </article>
  );
}
