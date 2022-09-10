import { Input, Label } from '../../../components.styled/form.styled';

export function Filter({ serchName }) {
  return (
    <form>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        placeholder="Serch"
        onChange={e => {
          serchName(e.target.value);
        }}
      />
    </form>
  );
}
