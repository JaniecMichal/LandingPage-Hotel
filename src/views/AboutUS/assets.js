import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";

export const aboutUsDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboredolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla nisi ut aliquip ex ea commodo consequat uis aute irure dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboredolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla
nisi ut aliquip ex ea commodo consequat uis aute irure dolor.
`;

export const aboutRestContent = () => {
  return (
    <>
      <p className={`section__description--pageVersion`}>
        <strong>
          Sum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut laboredolore magna aliqua. Ut enim ad minim veniam:
        </strong>
        <ul className="section__ulList">
          <li className="section__listItem">
            Nostrud exercitation ulla nisi ut aliquip,
          </li>
          <li className="section__listItem">
            Rae commodo consequat uis aute irure dolor,
          </li>
          <li className="section__listItem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </li>
          <li className="section__listItem">
            Od tempor incididunt ut laboredolore magna aliqua tenima.
          </li>
        </ul>
      </p>
      <div className="imageWrapper">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
      <p className={`section__description--pageVersion`}>
        <strong>
          Consectetur adipiscing elit, sed do eiu laboredolore magna aliqua. Ut
          enim ad minim veniam:
        </strong>
        <ol className="section__olList">
          <li className="section__olItem">
            Nostrud exercitation ulla nisi ut aliquip,
          </li>
          <li className="section__olItem">
            Rae commodo consequat uis aute irure dolor,
          </li>
          <li className="section__olItem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </li>
          <li className="section__olItem">
            Od tempor incididunt ut laboredolore magna aliqua tenima.
          </li>
        </ol>
        
        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        laboredolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ulla nisi ut aliquip ex ea commodo consequat uis aute irure
        dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut laboredolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ulla nisi ut aliquip ex ea commodo
        consequat uis aute irure dolor.
      </p>
    </>
  );
};
