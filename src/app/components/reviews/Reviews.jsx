import { useTranslations } from "next-intl";
import "../notifications-container/notifications-container.css";
import SingleReview from "../single-review/SingleReview";

const Reviews = () => {
  const t = useTranslations("Index");
  return (
    <div className="notification-container">
      <p className="notificatins-title">{t("reviews")}</p>
      <SingleReview
        review="from AYA ABDELBASSET in Javascript course"
        numberOfStars={5}
      />
      <SingleReview
        review="from AYA ABDELBASSET in Javascript course"
        numberOfStars={5}
      />
      <SingleReview
        review="from AYA ABDELBASSET in Javascript course"
        numberOfStars={5}
      />
      <SingleReview
        review="from AYA ABDELBASSET in Javascript course"
        numberOfStars={5}
      />
      <SingleReview
        review="from AYA ABDELBASSET in Javascript course"
        numberOfStars={5}
      />
      <SingleReview
        review="from AYA ABDELBASSET in Javascript course"
        numberOfStars={5}
      />
      <SingleReview
        review="from AYA ABDELBASSET in Javascript course"
        numberOfStars={5}
      />
      <SingleReview
        review="from AYA ABDELBASSET in Javascript course"
        numberOfStars={5}
      />
      <SingleReview
        review="from AYA ABDELBASSET in Javascript course"
        numberOfStars={5}
      />
      <SingleReview
        review="from AYA ABDELBASSET in Javascript course"
        numberOfStars={5}
      />
      <SingleReview
        review="from AYA ABDELBASSET in Javascript course"
        numberOfStars={5}
      />
    </div>
  );
};

export default Reviews;
