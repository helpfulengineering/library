# library

This is a repository of Open Knowledge Framework manifests that are being curated by [Helpful](https://helpfulengineering.org/) and associated projects.

At present, the [Open Know How](https://openknowhow.org) (OKH) specification is the only one being used.

## Structure

There are three core directories which corrolate to design maturity:
- [`alpha`](https://github.com/helpfulengineering/library/tree/main/alpha)
- [`beta`](https://github.com/helpfulengineering/library/tree/main/beta)
- [`stable`](https://github.com/helpfulengineering/library/tree/main/stable).

Each of these directories has (or will have) a subdirectory which corrolates to an Open Knowledge Framework specification.

The following subdirectories would be valid:
- `okh`: manifests that adhere to the [Open Know How](https://openknowhow.org) (OKH) specification
- `okw`: (future implementation) manifests that adhere to the [Open Know Where](http://openknowwhere.org) (OKH) specification

## How to contribute

To add or update a design (represented by a manifest), you must open a pull request against the [`main`](https://github.com/helpfulengineering/library/tree/main) branch.

- [How to create a Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

All manifests must pass schema validation by [**ok-validate**](https://github.com/helpfulengineering/ok-validate) which is enforced through a pull request.
