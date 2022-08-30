import { Input, Label } from './filter.styled';

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
