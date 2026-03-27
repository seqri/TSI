export interface Element {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
}

export interface ElementFormData {
  title: string;
  description: string;
}

export interface ElementCardProps {
  element: Element;
  onDelete: (id: number) => void;
}

export interface AddElementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (element: ElementFormData) => void;
}