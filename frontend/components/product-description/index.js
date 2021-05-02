import React from 'react';
import Review from './review';

function index({}) {
  return (
    <div className="mt-5">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item active">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="true"
              aria-controls="flush-collapseOne">
              Description
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <div class="pi-pdpmainbody">
                <p>
                  <b class="headline-5">LEGENDARY STYLE REFINED.</b>
                </p>
                <br />
                <p>
                  The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched
                  overlays, clean finishes and the perfect amount of flash to make you shine.
                </p>
                <br />
                <p>
                  <b class="headline-5">Benefits</b>
                </p>
                <ul>
                  <li>The stitched overlays on the upper add heritage style, durability and support.</li>
                  <li>Originally designed for performance hoops, the Nike Air cushioning adds lightweight, all-day comfort.</li>
                  <li>The low-cut silhouette adds a clean, streamlined look.</li>
                  <li>The padded collar feels soft and comfortable.</li>
                </ul>
                <br />
                <p>
                  <b class="headline-5">Product Details</b>
                </p>
                <ul>
                  <li>Foam midsole</li>
                  <li>Perforations on the toe</li>
                  <li>Rubber sole</li>
                  <li>Shown: White/White</li>
                  <li>Style: CW2288-111</li>
                </ul>
                <br />
                <p>
                  <b class="headline-5">Air Force 1 Origins</b>
                </p>
                <p>
                  Debuting in 1982, the AF1 was the first basketball shoe to house Nike Air, revolutionizing the game while rapidly gaining traction
                  around the world. Today, the Air Force 1 stays true to its roots with the same soft and springy cushioning that changed sneaker
                  history.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo">
              Review
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <Review />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
