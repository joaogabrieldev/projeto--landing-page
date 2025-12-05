//* ItemAccorda 
export interface IAccordaionItemProps {
  questionID: number;
  questionTitle: string;
  questionBody: string;
}

//* Badge
export interface IPriceBadgeProps {
  label: string;
}

//* CheckIcon
export interface ICheckProps {
  iconWidth: number;
}

//* NavLink
export interface INavLinkProps {
  title: string;
  slug: string;
}

//* StarFilled
export interface IStarProps {
  key?: number;
  width: number;
  //   classname: string;
}
