import { ref, set, get, child, push, update, remove } from "firebase/database";
import firebaseDb from "../utils/firebase";

type FirebaseDBNodeType = `albums` | `artists`;

const useFirebase = () => {
  /**
   * Generate a new node with a given key
   * @param {FirebaseDBNodeType} node Node to generate key on
   * @returns {string} key
   */
  const createKey = (node: FirebaseDBNodeType) => {
    return push(child(ref(firebaseDb), node)).key;
  };

  /**
   * Write data to the db at optional location, or generates a new key if not provided
   * @param {FirebaseDBNodeType} node Firebase node to write to
   * @param {any} data Data to store
   * @param {string} key? optional key in node
   * @returns Promise
   */
  const writeToDb = (node: FirebaseDBNodeType, data: any, key?: string) => {
    // * If no key
    if (!key) {
      // * create a key
      key = createKey(node) as string;
    }

    return set(ref(firebaseDb, `${node}/${key}`), data);
  };

  /**
   * Read data from the db at the given node / key
   * @param {FirebaseDBNodeType} node Node to read from
   * @param {string} key? optional key in node
   * @returns
   */
  const readFromDb = (node: FirebaseDBNodeType, key?: string) => {
    const loc: string = key ? `${node}/${key}` : node;

    return get(child(ref(firebaseDb), loc));
  };

  /**
   *
   * Read data from the db at the given node / key
   * @param {FirebaseDBNodeType} node Node to update from
   * @param {string} key? key in node to update
   * @param {any} data Data to insert
   * @returns
   */
  const updateDb = (node: FirebaseDBNodeType, key: string, data: any) => {
    return update(ref(firebaseDb, node), { [key]: data });
  };

  /**
   * Delete a given node
   * @param {string} node Node to delete
   * @returns
   */
  const deleteFromDb = (node: string) => {
    return remove(ref(firebaseDb, node));
  };

  return {
    writeToDb,
    readFromDb,
    updateDb,
    deleteFromDb,
  };
};

export default useFirebase;
